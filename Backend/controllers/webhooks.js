// import { Webhook } from "svix";
// import User from "../modules/user";
// // API controller function to Manage clerk  User with database
// export const clerkWebhooks = async (req, res) => {
//   try {
//     const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
//     await whook.verify(JSON.stringify(req.body), {
//       "svix-id": req.headers["svix-id"],
//       "svix-timestamp": req.headers["svix-timestamp"],
//       "svix-signature": req.headers["svix-signature"],
//     });
//     const { data, type } = req.body;
//     switch (type) {
//       case "user.created": {
//         const userData = {
//           _id: data._id,
//           email: data.email_address[0],
//           name: data.first_Name + " " + data.last_Name,
//           imageUrl: data.imageUrl,
//         };
//         await User.create(userData);
//         res.json({});
//         break;
//       }
//       case "user.updated": {
//         const userData = {
//           email: data.email_address[0],
//           name: data.first_Name + " " + data.last_Name,
//           imageUrl: data.imageUrl,
//         };
//         User.findByIdAndUpdate(data.id, userData);
//         res.json({});
//         break;
//       }
//       case "user.deleted": {
//         User.findByIdAndUpdate(data.id, userData);
//         res.json({});
//         break;
//       }

//       default:
//         break;
//     }
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };
import { Webhook } from "svix";
import User from "../modules/user.js"; // حتما .js اضافه کن اگر ESM استفاده می‌کنی

// API controller function to manage Clerk user webhooks with database
export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Verify the webhook
    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      // ✅ ایجاد کاربر جدید
      case "user.created": {
        const userData = {
          _id: data.id, // Clerk از id استفاده می‌کنه نه _id
          email: data.email_addresses[0]?.email_address || "",
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url || "",
        };
        await User.create(userData);
        console.log("✅ User created:", userData);
        return res.json({ success: true });
      }

      // ✅ به‌روزرسانی کاربر
      case "user.updated": {
        const userData = {
          email: data.email_addresses[0]?.email_address || "",
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url || "",
        };
        await User.findByIdAndUpdate(data.id, userData, { new: true });
        console.log("✏️ User updated:", data.id);
        return res.json({ success: true });
      }

      // ✅ حذف کاربر
      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        console.log("🗑 User deleted:", data.id);
        return res.json({ success: true });
      }

      default:
        console.log("ℹ️ Unhandled webhook event:", type);
        return res
          .status(200)
          .json({ success: true, message: "Event ignored" });
    }
  } catch (error) {
    console.error("❌ Webhook Error:", error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

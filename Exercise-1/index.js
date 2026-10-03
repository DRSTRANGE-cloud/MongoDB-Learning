import fs from "fs/promises";
import fsn from "fs";
import path from "path";
const basepath = "C:\\Users\\ADMIN\\Desktop\\Web Development\\Learning\\Exercise-15";
let files = await fs.readdir(basepath);
console.log(files);
let extensions = [];
for (const item of files) {
  let ext = item.split(".")[item.split(".").length - 1];

  if (ext !== "json" && ext !== "js" && item.split(".").length > 1 && item !== 'index.js' && item !== 'package.json') {
    if (fsn.existsSync(path.join(basepath, ext))) {
      await fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
    } else {
      await fs.mkdir(path.join(basepath, ext), { recursive: true });
      await fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
    }
  }
  console.log(item);
}

import ImageKit , {toFile} from "@imagekit/nodejs"

const imageKit = new imageKit({privateKey: process.env.IMAGEKIT_PRIVATE_KEY});

function hasImageKitConfig() {
    return Boolean(process.env.IMAGEKIT_PRIVATE_KEY)
}

// originalName= "My Photo (1).png"
// result: "chat-1749300000000-My_Photo__1_.png"
//this helper makes a safe , unique filename for uploaded files.
function createFileName(originalName = "upload") {
  const safeName = originalName.replace(/[^a-zA-Z0-9._-]/g, "_");
  return `chat-${Date.now()}-${safeName}`;
}

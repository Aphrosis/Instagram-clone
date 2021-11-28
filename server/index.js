const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { cloudinary } = require("./cloudinary");
const cors = require("cors");
const db = require("./Firestore.js");

const {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  Timestamp,
  query,
  limit,
  where,
} = require("firebase/firestore");
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello");
});
app.post("/user", async (req, res) => {
  const docRef = doc(db, "Users", req.body.data);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    res.send(docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
});
app.post("/img", async (req, res) => {
  const arr = [];
  const user = req.body.data;
  const querySnapshot = await getDocs(collection(db, "Users", user, "posts"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    arr.push(doc.data());
  });
  res.send(arr);
});
app.get("/all", async (req, res) => {
  const arr = [];

  const querySnapshot = await getDocs(collection(db, "Users"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    arr.push(doc.data());
  });
  res.send(arr);
});
app.post("/follow", async (req, res) => {
  const user = req.body.data;
  
  const arr = [];
  const querySnapshot = await getDocs(
    collection(db, "Users", user, "following")
  );
  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
  });
  res.send(arr);
  
});
app.post("/upload", async (req, res) => {
  const img = req.body.data;
  const user = req.body.user;
  const id = req.body.id;
  const user_name = req.body.user_name;
  const user_image = req.body.user_image;
  const number = req.body.number;
  const uploaded = await cloudinary.uploader.upload(
    img,
    async function (error, result) {
     
      const nd = new Date();
      const d = new Date();
      const sec = d.getSeconds();
      const millisec = d.getMilliseconds();
      nd.setSeconds(sec);
      nd.setMilliseconds(millisec);
      await setDoc(doc(db, "Users", user, "posts", id), {
        url: result.url,
        date: nd,
        user: user,
        user_name: user_name,
        user_image: user_image,
        number:number
      });

      res.send(result);
    }
  );
});
async function f(user) {
  const arr = [];

  const Users = collection(db, "Users", user, "posts");
  const q = query(Users, limit(3), where("url", "!=", ""));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
  });

  return arr;
}
app.post("/posts", async (req, res) => {
  const following = req.body.data;
 
  const array = [];
  following.map((value, index, a) => {
    if (value.name === "") return;
    if (value.user === undefined) return;
    const data = f(value.user);
    data.then((data) => {
      array.push(...data);
       
      if (index === a.length - 2) {
        array.sort((a, b) => {
          return a.date.seconds - b.date.seconds;
        });
        res.send(array);
      }
    });
  });
});
app.post("/user_img", async (req, res) => {
  const img = req.body.data;
  const user = req.body.user;
  const name = req.body.name;
  const uploaded = await cloudinary.uploader.upload(
    img,
    async function (error, result) {
      console.log("user image success");
      console.log(typeof result);
      await setDoc(doc(db, "Users", user, "user_image", "url"), {
        url: result.url,
      });
      await setDoc(doc(db, "Users", user), {
        name: name,
        url: result.url,
      });
      res.send(result.url);
    }
  );
});
app.listen(port, () => {
  console.log("connected");
});

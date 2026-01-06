import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { doc, onSnapshot, updateDoc, increment } from "firebase/firestore";
// doc - references a document
// getDoc - reads a document
// updateDoc - updates a document
// increment - atomically increments a numeric field
import { mydb } from "../firebase";

function Likebutton() {
  const [like, setLike] = useState(0); // handling like count
  const [isLike, setisLike] = useState(false); //handling for tracking user has liked

  useEffect(() => {
    const hasLiked = localStorage.getItem("isLike"); // getting the value from localstorage
    // if user liked
    if (hasLiked) {
      setisLike(true); // set it to true
    }
    // mydb = name of the firebase connection
    // Portfolio = the name of the collection created on firebase
    // Likes = the nmae of the document inside of the collection on firebase
    const ref = doc(mydb, "Portfolio", "Likes");

    // listens for changes tothe document, when it change it autmatically runs callback function
    const snap = onSnapshot(ref, (docSnap) => {
      if (docSnap.exists()) {
        // check if the document has data
        setLike(docSnap.data().count); // this reads the count value on firestore and updates the like
      }
    });

    // stop the operation or stop updating the like
    return () => snap();
  }, []);

  // onclick funtion
  const handleLike = async () => {
    if (isLike) return; // if user alrdy like it return true

    const ref = doc(mydb, "Portfolio", "Likes"); // same as line 20-22

    //updateDoc = Firestore function that updates a document in the database
    // await = pauses the onclick function then it waits for the firestore to finish updating the count of like
    await updateDoc(ref, {
      count: increment(1), // add 1 to the like count
    });

    setisLike(true); // when click it updates to tru making it you liked
    localStorage.setItem("isLike", "true"); // saves the value like it remembers you liked
  };

  return (
    <div className="holographic-card text-lg flex w-25 md:w-25 lg:w-30 items-center justify-center gap-2 p-3 border rounded-4xl border-[#91ff00] text-white">
      <button
        className="flex items-center gap-2"
        onClick={handleLike}
        disabled={isLike}
      >
        <span>
          <CiHeart className="text-2xl" />
        </span>
        <span>{like}</span>
      </button>
    </div>
  );
}
export default Likebutton;

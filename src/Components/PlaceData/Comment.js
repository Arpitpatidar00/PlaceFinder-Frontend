// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';
// import UserDataDetails from '../Views/ProfileDetails.js'; // Import the new component
// import './CommentSection.css'; // Create a CSS file for styling
// import Api from '../../Api.js';

// const CommentSection = ({ placeName }) => {
//   const { userData } = useSelector((state) => state.auth);
//   const placeId = useSelector((state) => state.place.placeId);

//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const [selectedUser, setSelectedUser] = useState(null);
//   const [overlayVisible, setOverlayVisible] = useState(false);

//   useEffect(() => {
//     if (placeId) {
//       fetchComments();
//     }
//   }, [placeId,fetchComments]);

//   const fetchComments = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get(`${Api}/comments`);
//       const filteredComments = response.data.filter(comment => comment.placeId === placeId);
//       setComments(filteredComments);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handlePostComment = async () => {
//     if (!newComment) return;

//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post(`${Api}/comments`, {
//         text: newComment,
//         userId: userData.userId,
//         avatarUrl: `data:image/jpeg;base64,${userData.image}`,
//         userProfile: `data:image/jpeg;base64,${userData.image}`,
//         fullName: userData.username,
//         placeName,
//         placeId,
//       });

//       if (response.status !== 201) {
//         throw new Error('Failed to post comment');
//       }

//       setComments([...comments, response.data]);
//       setNewComment('');
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (!userData || !placeName || !placeId) {
//     return <div>Loading...</div>;
//   }

//   const handleCommentClick = (comment) => {
//     setSelectedUser(comment);
//     setOverlayVisible(true);
//   };

//   const handleClose = () => {
//     setSelectedUser(null);
//     setOverlayVisible(false);
//   };

//   return (
//     <div className="comment-section">
//       {isLoading && <div>Loading...</div>}
//       {error && <div className="error">Error: {error}</div>}

//       <div className="comment-input">
//         <img src={`data:image/jpeg;base64,${userData.image}`} alt="User avatar" />
//         <textarea
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           placeholder="Write a comment..."
//         />
//         <button onClick={handlePostComment} disabled={isLoading}>
//           Post Comment
//         </button>
//       </div>

//       <div className="comments-list">
//         {comments.map((comment) => (
//           <div key={comment._id} className="comment" onClick={() => handleCommentClick(comment)}>
//             <img src={comment.avatarUrl} alt="avatar" />
//             <div className="comment-content">
//               <div className="comment-author">{comment.fullName}</div>
//               <div className="comment-text">{comment.text}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {overlayVisible && (
//         <UserDataDetails user={selectedUser} onClose={handleClose} />
//       )}
//     </div>
//   );
// };

// export default CommentSection;
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import UserDataDetails from '../Views/ProfileDetails.js'; // Import the new component
import './CommentSection.css'; // Create a CSS file for styling
import Api from '../../Api.js';

const CommentSection = ({ placeName }) => {
  const { userData } = useSelector((state) => state.auth);
  const placeId = useSelector((state) => state.place.placeId);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [selectedUser, setSelectedUser] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const fetchComments = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
<<<<<<< HEAD
      const response = await axios.get('https://travelling-backend.onrender.com/comments');
=======
      const response = await axios.get(`${Api}/comments`);
>>>>>>> d368039 (improvements)
      const filteredComments = response.data.filter(comment => comment.placeId === placeId);
      setComments(filteredComments);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [placeId]);

  useEffect(() => {
    if (placeId) {
      fetchComments();
    }
  }, [placeId, fetchComments]);

  const handlePostComment = async () => {
    if (!newComment) return;

    setIsLoading(true);
    setError(null);

    try {
<<<<<<< HEAD
      const response = await axios.post('https://travelling-backend.onrender.com/comments', {
=======
      const response = await axios.post(`${Api}/comments`, {
>>>>>>> d368039 (improvements)
        text: newComment,
        userId: userData.userId,
        avatarUrl: `data:image/jpeg;base64,${userData.image}`,
        userProfile: `data:image/jpeg;base64,${userData.image}`,
        fullName: userData.username,
        placeName,
        placeId,
      });

      if (response.status !== 201) {
        throw new Error('Failed to post comment');
      }

      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!userData || !placeName || !placeId) {
    return <div>Loading...</div>;
  }

  const handleCommentClick = (comment) => {
    setSelectedUser(comment);
    setOverlayVisible(true);
  };

  const handleClose = () => {
    setSelectedUser(null);
    setOverlayVisible(false);
  };

  return (
    <div className="comment-section">
      {isLoading && <div>Loading...</div>}
      {error && <div className="error">Error: {error}</div>}

      <div className="comment-input">
        <img src={`data:image/jpeg;base64,${userData.image}`} alt="User avatar" />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={handlePostComment} disabled={isLoading}>
          Post Comment
        </button>
      </div>

      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment._id} className="comment" onClick={() => handleCommentClick(comment)}>
            <img src={comment.avatarUrl} alt="avatar" />
            <div className="comment-content">
              <div className="comment-author">{comment.fullName}</div>
              <div className="comment-text">{comment.text}</div>
            </div>
          </div>
        ))}
      </div>

      {overlayVisible && (
        <UserDataDetails user={selectedUser} onClose={handleClose} />
      )}
    </div>
  );
};

export default CommentSection;

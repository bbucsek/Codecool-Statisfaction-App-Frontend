import axios from "../Axios/axios";

export async function GetFeedbacks() {
  let result = await axios.post("/feedback/month", {
    tokenId: window.sessionStorage.getItem("tokenId"),
  });
  if (result.status === 200) {
    return result.data;
  } else if (result.status === 204) {
    return null;
  }
  console.log(result);
}

export async function GetFeedback(id) {
  let result = await axios.get(`/feedback/${id}`);
  if (result.status === 200) {
    return result.data;
  }
  return null;
}

export async function Vote(feedbackId) {
  let result = await axios.put(`/feedback/${feedbackId}/vote`, {
    feedbackId: feedbackId,
    tokenId: window.sessionStorage.getItem("tokenId"),
  });
  if (result.status !== 200) {
    console.log(result);
    return false;
  }
  return true;
}

export async function PostFeedback(feedback) {
  let result = await axios.post("/feedback", {
    tokenId: window.sessionStorage.getItem("tokenId"),
    title: feedback.title,
    anonymus: feedback.anonymus,
  });
  if (result.status !== 201) {
    console.log(result.statusText);
  }
  console.log(result.data);
  return result.data;
}

export async function DeleteFeedback(id) {
  let result = await axios.delete(`/feedback/${id}`, {
    headers: {
      tokenId: window.sessionStorage.getItem("tokenId"),
    },
  });
  if (result.status === 200) return true;

  console.log(result);
  return false;
}

import axios from "axios";
import { config } from "./config/config";
import { getAuth } from "firebase/auth";

export class LinkedInService {
  static getLinkedInAuthorizationUrl(uid: string | undefined): string | null {
    if (!uid) return null;
    const clientId = process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID;
    const baseApiUrl =
      process.env.NODE_ENV === "production"
        ? config.production.apiUrl
        : config.development.apiUrl;
    const apiUrl = `${baseApiUrl}/auth/linkedin/callback`;

    const redirectUri = encodeURIComponent(apiUrl);
    const state = uid;
    const scope = encodeURIComponent(
      "r_liteprofile r_emailaddress w_member_social"
    );
    const responseType = "code";

    const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;
    return url;
  }

  static async shareOnLinkedIn(
    content: string,
    images?: (ArrayBuffer | undefined)[],
    video?: ArrayBuffer
  ) {
    console.log(images);
    console.log(video);
    const baseApiUrl =
      process.env.NODE_ENV === "production"
        ? config.production.apiUrl
        : config.development.apiUrl;
    const apiUrl = `${baseApiUrl}/posts/share`;

    const auth = getAuth();
    const token = await auth.currentUser?.getIdToken(); // firebase auto manages cache

    let formData = new FormData();
    formData.append("content", content);

    if (images && images.length && !video) {
      images.forEach((image, index) => {
        if (image) {
          formData.append(`files`, new Blob([image]), `image-${index}.jpeg`);
        }
      });
    }
    if (video && (!images || !images.length)) {
      formData.append("files", new Blob([video]), "video.mp4");
    }

    try {
      const response = axios.post(apiUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error: any) {
      console.error(`Error while sharing post: ${error}`);
      console.error(error.response);
    }
  }
}

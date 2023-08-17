import axios from "axios";
import { config } from "./config/config";
import { getAuth } from "firebase/auth";
import "firebase/auth";

export class GptService {
  static async generate(options: Record<string, string | number>) {
    const baseApiUrl =
      process.env.NODE_ENV === "production"
        ? config.production.apiUrl
        : config.development.apiUrl;
    const apiUrl = `${baseApiUrl}/posts/generate`;

    const auth = getAuth();
    const token = await auth.currentUser?.getIdToken(); // firebase auto mangaes cache

    try {
      const requestOptions = { ...options, free: false };

      const response = await axios.post(
        apiUrl,
        requestOptions,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.text;
    } catch (error) {
      console.error(`Error while generating post: ${error}`);
    }
  }
}

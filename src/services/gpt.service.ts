import axios from "axios";
import { config } from "./config/config";

export class GptService {
  static async generate(prompt: string) {
    const baseApiUrl =
      process.env.NODE_ENV === "production"
        ? config.production.apiUrl
        : config.development.apiUrl;
    const apiUrl = `${baseApiUrl}/posts/generate`;
    try {
      const response = await axios.get(apiUrl, {
        params: {
          prompt,
        },
      });
      return response.data.text;
    } catch (error) {
      console.error(`Error generating post: ${error}`);
    }
  }
}

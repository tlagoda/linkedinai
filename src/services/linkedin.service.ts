import { config } from "./config/config";

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
}

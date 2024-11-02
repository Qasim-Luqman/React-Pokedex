export const config = {
    apiBaseUrl: process.env.REACT_APP_API_BASE_URL as string,
} as const;


if (!config.apiBaseUrl) {
    throw new Error('REACT_APP_API_BASE_URL is not defined in environment variables');
}

// src/lib/githubApi.ts
export const getGithubUserData = async (accessToken: string) => {
    const response = await fetch('https://api.github.com/user', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/vnd.github.v3+json',  // Specify API version
      },
    });
  
    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.status} - ${response.statusText}`);
    }
  
    const userData = await response.json();
    return userData;
  };
  
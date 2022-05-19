interface UserData {
  token: string;
  name: string;
}
export interface LikeData {
  node_id: string;
  value: number;
}

const AUTH_PREFIX = 'guest';
const STORAGE_KEY = 'likesToken';

export function LikeAPI(projectId: string, baseURL: string) {
  async function getLikeCount(...nodeIds: string[]): Promise<LikeData[]> {
    if (!nodeIds.length) {
      return [];
    }

    const { token: Authorization } = await auth();

    try {
      const response = await fetch(`/assist/v1/public/projects/${projectId}/nodes/likes`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json', Authorization },
        body: JSON.stringify({
          node_ids: nodeIds,
        }),
      });

      const { likes } = await response.json();

      return likes || [];
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  async function like(nodeId: string): Promise<number> {
    if (!nodeId) {
      return 0;
    }

    const { token: Authorization, name } = await auth();

    try {
      const response = await fetch(`${baseURL}/assist/v1/public/projects/${projectId}/nodes/like`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization,
          UserID: name,
        },
        body: JSON.stringify({
          node_id: nodeId,
          user_name: name,
        }),
      });
      const { likes } = await response.json();

      return likes || 0;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  async function dislike(nodeId: string): Promise<number> {
    if (!nodeId) {
      return 0;
    }

    const { token: Authorization, name } = await auth();

    try {
      const response = await fetch(
        `${baseURL}/assist/v1/public/projects/${projectId}/nodes/unlike`,
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            Authorization,
            UserID: name,
          },
          body: JSON.stringify({
            node_id: nodeId,
            user_name: name,
          }),
        },
      );
      const { likes } = await response.json();

      return likes || 0;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  async function auth(): Promise<UserData> {
    try {
      const userData: UserData = JSON.parse(globalThis.localStorage.getItem(STORAGE_KEY) || '');
      if (userData?.token) {
        return userData;
      }
    } catch (e) {
      // do nothing
    }

    try {
      const response = await fetch(`${baseURL}/assist/v1/public/auth`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prefix: AUTH_PREFIX,
        }),
      });

      const { token, name } = await response.json();

      globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify({ token, name }));

      return { token, name } as UserData;
    } catch (e) {
      console.error(e);
      return {} as UserData;
    }
  }

  return {
    getLikeCount,
    like,
    dislike,
  };
}

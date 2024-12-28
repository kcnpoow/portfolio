export class Api {
  private baseUrl: string = 'http://localhost:8080';

  constructor(url: string) {
    this.baseUrl += url;
  }

  private async request(method: string, url: string, body?: any): Promise<any> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    const options: RequestInit = {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    };

    try {
      const response = await fetch(`${this.baseUrl}${url}`, options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  public async get(url: string): Promise<any> {
    return this.request('GET', url);
  }

  public async post(url: string, data: any): Promise<any> {
    return this.request('POST', url, data);
  }

  public async put(url: string, data: any): Promise<any> {
    return this.request('PUT', url, data);
  }

  public async delete(url: string): Promise<any> {
    return this.request('DELETE', url);
  }
}

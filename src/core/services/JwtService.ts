class JwtService {
  public static ID_TOKEN_KEY = 'id_token' as string

  public static getToken = (): string | null => {
    return window.localStorage.getItem(JwtService.ID_TOKEN_KEY)
  }

  public static saveToken = (token: string): void => {
    window.localStorage.setItem(JwtService.ID_TOKEN_KEY, token)
  }

  public static destroyToken = (): void => {
    window.localStorage.removeItem(JwtService.ID_TOKEN_KEY)
  }
}

export default JwtService

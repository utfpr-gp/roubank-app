import { environment } from 'src/environments/environment';
export class RoutesAPI {
  public static apiUrl = environment.apiURL;
  public static readonly TRANSACTIONS = RoutesAPI.apiUrl + '/transactions';
  public static readonly USERS = RoutesAPI.apiUrl + '/users';
  public static readonly USERS_PT = RoutesAPI.apiUrl + '/usuarios';
  public static readonly CITIES = RoutesAPI.apiUrl + '/cities';
  public static readonly STATES = RoutesAPI.apiUrl + '/states';
}

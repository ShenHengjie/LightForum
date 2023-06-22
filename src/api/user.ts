/*
 * @Author: Jason Shen
 * @Date: 2023-06-22 12:35:09
 * @Description: 卷死别人！
 * @FilePath: \forum\src\api\user.ts
 */
import { get, post } from '@/utils/request';

// export const Login = (params: any) => { return get("http://localhost:8002/Test1/login?em="+params.em+"&pass="+params.pass) };

export const Login = (params: any) => { return get("http://localhost:8002/Test1/login?em="+params.em+"&pass="+params.pass) };

export const Register = (params: any) => { return post("http://localhost:8002/Test1/enroll",params) };

export const sendCode = (params: String) => { return get("http://localhost:8002/Test1/sentcode?email="+params) };
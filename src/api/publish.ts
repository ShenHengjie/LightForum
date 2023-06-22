/*
 * @Author: Jason Shen
 * @Date: 2023-06-22 21:17:47
 * @Description: 卷死别人！
 * @FilePath: \forum\src\api\publish.ts
 */
import { post } from '@/utils/request';

export const AddPublish = (params: any) => { return post("http://localhost:8001/Forum/addTalk",params)};
/*
 * @Author: hayyot
 * @Date: 2023-06-21 15:34:46
 * @Description: 铁沸物
 * @FilePath: \forum\src\api\index.ts
 */
import { get } from '@/utils/request';

export const getAllContent = get("http://localhost:8001/Forum/getall")
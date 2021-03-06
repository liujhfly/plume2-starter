/**
 * Created by Acans angrycans@gmail.com on 2017/3/15
 */
import 'whatwg-fetch';
import { Response } from 'qmkit';

/**
 * 根据id获取详情
 * @param id 
 */
export async function getTopicsDetail(id: string) {
  //console.log("getTopicsDetail", id);
  const res = await fetch('https://cnodejs.org/api/v1/topic/' + id);
  const json: Response = await res.json();
  return json;
}

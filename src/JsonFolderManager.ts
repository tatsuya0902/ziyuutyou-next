import fs from 'fs'
import LinkData from './data/LinkData'
import { MakingAppData, MakingAppDetailData } from './data/MakingAppData'

/** 
 * ContentFolderManager の JSONフォルダ版 
 * 
 * 静的書き出し時に呼んで下さい。クライアント側では呼べません
 */
class JsonFolderManager {
    /** JSONファイルのフォルダパス */
    static JSON_FOLDER_PATH = `${process.cwd()}/content/json`

    /** 作ったアプリJSONのファイル名 */
    static JSON_MAKING_APP_FILE_NAME = `making_app.json`

    /** 一言メッセージJSONのファイル名 */
    static JSON_RANDOM_MESSAGE_FILE_NAME = `random_message.json`

    /** リンク集のJSONのファイル名 */
    static JSON_LINK_FILE_NAME = `link.json`

    /**
     * リンク集のJSONを読み出して返す
     * 
     * @returns リンク集データの配列
     */
    static async getLinkList() {
        const linkJSON = await this.readTextFile(`${this.JSON_FOLDER_PATH}/${this.JSON_LINK_FILE_NAME}`)
        const json = JSON.parse(linkJSON)
        return json["link"] as Array<LinkData>
    }

    /**
     * ランダムで返すメッセージ
     * 
     * @returns ランダムメッセージの配列
     */
    static async getRandomMessageList() {
        const randomMessageJSON = await this.readTextFile(`${this.JSON_FOLDER_PATH}/${this.JSON_RANDOM_MESSAGE_FILE_NAME}`)
        const json = JSON.parse(randomMessageJSON)
        return json["random_message"] as Array<string>
    }

    /**
     * 作ったアプリの配列を返す
     * 
     * @returns MakingAppData配列
     */
    static async getMakingAppMap() {
        const makingJSON = await this.readTextFile(`${this.JSON_FOLDER_PATH}/${this.JSON_MAKING_APP_FILE_NAME}`)
        const json = JSON.parse(makingJSON)
        return Object.keys(json).map((key) => {
            const platformData: MakingAppData = {
                platfromName: key,
                appList: json[key] as Array<MakingAppDetailData>
            }
            return platformData
        })
    }

    /**
     * テキストファイルを読み出す
     * 
     * @param filePath ファイルパス
     * @returns 読みだしたファイル
     */
    private static async readTextFile(filePath: string) {
        return await fs.readFileSync(filePath, { encoding: 'utf-8' })
    }

}

export default JsonFolderManager
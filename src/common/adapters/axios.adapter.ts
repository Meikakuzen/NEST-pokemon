import { httpAdapter} from '../interfaces/http-adapter.interface'
import axios from 'axios'
import { AxiosInstance } from 'axios'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AxiosAdapter implements httpAdapter {

    private axios: AxiosInstance = axios

    async get<T>( url: string): Promise<T>{
        try {
            const {data }= await this.axios.get(url)

            return data
        } catch (error) {
            throw new Error("This is an error. Check logs")
        }
    }
}
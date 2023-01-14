import { Injectable } from '@nestjs/common';
import { BookDTO } from './book.dto';

@Injectable()
export class BooksService {
    async create(data: BookDTO){

    }
}

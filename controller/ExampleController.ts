import {
    Controller,
    Param,
    Get,
    Post,
    Req,
    Res,
    QueryParam
} from 'routing-controllers';
import {Request, Response} from 'express';

@Controller('/test')
export class ExampleController {

    @Get('/users')
    private getMessage(@Req() request: Request, @Res() response: Response): void {
        response.status(200).send({message: `Hello from 'get' method for lambda`});
    }

    @Get('/users/:id')
    private getMessageFromPath(@Param('id') id: number, @Res() response: Response): void {
        response.status(200).send({message: `Hello from 'get' method for lambda with passed id from path: ${id}`});
    }

    @Get('/withParam')
    private getMessageWithQueryParam(@Req() request: Request, @Res() response: Response, @QueryParam('param') param: string) {
        return {
            message: `Hello from 'get' method with query param: ${param}`
        }
    }

    @Post()
    private postSomething(@Req() request: Request, @Res() response: Response) {
        return {
            message: `Hello from 'post' method`
        }
    }
}

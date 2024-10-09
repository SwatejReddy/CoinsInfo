export interface IApiResponse {
    status: number;
    data: any,
    message: string;
    success: boolean;
}

class ApiResponse implements IApiResponse {
    status: number;
    data: any;
    message: string;
    success: boolean;

    constructor(status: number, data: any, message = "success") {
        this.status = status;
        this.data = data;
        this.message = message;
        this.success = status < 400;
    }
}

export default ApiResponse;
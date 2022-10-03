import { Injectable } from '@angular/core'

declare let toastr: any;
@Injectable()
export class ToastrService {
    success(message: string, title?):void {
        toastr.success(message,title)
    }
info(message: string, title?: string):void{
    toastr.info(message,title)
}
warning(message: string, title?: string):void{
    toastr.warning(message,title)
}
error(message: string, title?: string){
    toastr.error(message,title)
}
}
import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'filesize'
})
export class SizePipi implements PipeTransform {
    transform(value: number, des: number) {
        console.log(value);
        if (value > 1000) {
            return (value / 1000).toFixed(des) + 'Mb';
        }
    }
}
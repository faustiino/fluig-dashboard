import { Component, Input } from '@angular/core';
import byteSize, * as ByteSize from 'byte-size';

@Component({
  selector: 'card-monitor',
  templateUrl: './card-monitor.component.html',
  styleUrl: './card-monitor.component.css'
})
export class CardMonitorComponent {
  @Input() icon:string = '';
  @Input() color:string = '';
  @Input() textColor = '';
  @Input() titulo:string = '';
  @Input() status:string = '';
  @Input() info:string | ByteSize.ByteSizeResult | number | undefined = '';
  @Input() infoSecond:string | ByteSize.ByteSizeResult | undefined = '';
  @Input() infoThird:string | ByteSize.ByteSizeResult | undefined = '';
  @Input() percent:number | undefined = 0;
}

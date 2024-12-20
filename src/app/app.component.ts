import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import byteSize, * as ByteSize from 'byte-size';
import moment from 'moment';
import 'moment/locale/pt-br';

interface Monitor {
  name:string,
  status:string,
  _expandable: string[]
}
interface Statistic {
  database:{
    name: string | undefined,
    version: string| undefined
  },
  memorySize: {
    used: ByteSize.ByteSizeResult | undefined,
    total: ByteSize.ByteSizeResult | undefined,
    percent: number | undefined
  },
  diskSize: {
    used: ByteSize.ByteSizeResult | undefined,
    total: ByteSize.ByteSizeResult | undefined,
    percent: number | undefined
  },
  userSize:number | undefined,
  activiteTime: string | undefined,
  coreSize: number | undefined
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit{
  title = 'dashboard-fluig';
  items:Monitor[] = []
  statistics:Statistic = {
    database: {
      name: undefined,
      version: undefined
    },
    memorySize: {
      used: undefined,
      total: undefined,
      percent: undefined
    },
    diskSize: {
      used: undefined,
      total: undefined,
      percent: undefined
    },
    userSize: undefined,
    activiteTime: undefined,
    coreSize: undefined
  };

  constructor(private dashboardService:DashboardService){}

  ngOnInit(): void {
    this.getMonitors();
    this.getStatistics();
  }

  async getMonitors(){
    (await this.dashboardService.get('/environment/api/v2/monitors')).subscribe(
      {
        next: (res) => {
          res.items.forEach((element:Monitor) => {
            let registro:Monitor = {
              status: element.status,
              _expandable: element._expandable,
              name: ''
            };
            
            switch (element.name) {
              case 'ANALYTICS_AVAIABILITY':
                registro.name = 'Analytics'
                break;
              case 'LICENSE_SERVER_AVAILABILITY':
                registro.name = 'License Server'
                break;
              case 'MAIL_SERVER_AVAILABILITY':
                registro.name = 'Mail Server'
                break;
              case 'VIEWER_AVAILABILITY':
                registro.name = 'Fluig Viewer'
                break;
              case 'OPEN_OFFICE_AVAILABILITY':
                registro.name = 'Open Office'
                break;
              case 'REAL_TIME_AVAILABILITY':
                registro.name = 'Fluig Realtime'
                break;
              case 'MS_OFFICE_AVAILABILITY':
                registro.name = 'MS Office'
                break;
              case 'SOLR_SERVER_AVAILABILITY':
                registro.name = 'Solr Server'
                break;
            }
            
            this.items.push(registro);
          });
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

  async getStatistics(){
    (await this.dashboardService.get('/environment/api/v2/statistics')).subscribe(
      {
        next: (res) => {
          var date = new Date(res.RUNTIME.startTime);

          this.statistics = {
            database:{
              name: res.DATABASE_INFO.databaseName,
              version: res.DATABASE_INFO.databaseVersion
            },
            memorySize: {
              used: byteSize(res.OPERATION_SYSTEM["server-memory-size"] - res.OPERATION_SYSTEM["server-memory-free"]),
              total: byteSize(res.OPERATION_SYSTEM["server-memory-size"]),
              percent: Math.round((res.OPERATION_SYSTEM["server-memory-size"] - res.OPERATION_SYSTEM["server-memory-free"]) / res.OPERATION_SYSTEM["server-memory-size"] * 100)
            },
            diskSize: {
              used: byteSize(res.OPERATION_SYSTEM["server-hd-space"] - res.OPERATION_SYSTEM["server-hd-space-free"]),
              total: byteSize(res.OPERATION_SYSTEM["server-hd-space"]),
              percent: Math.round((res.OPERATION_SYSTEM["server-hd-space"] - res.OPERATION_SYSTEM["server-hd-space-free"]) / res.OPERATION_SYSTEM["server-hd-space"] * 100)
            },
            userSize: res.CONNECTED_USERS.connectedUsers,
            activiteTime: moment(date).locale('pt-BR').fromNow(),
            coreSize: res.OPERATION_SYSTEM["server-core-system"]
          }
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }
}

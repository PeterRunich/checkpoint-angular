import {Component} from '@angular/core';
import {TableComponent} from "./table.component";

@Component({
  selector: 'app-root',
  template: `
    <app-table [headers]="headers" [rows]="data"></app-table>`,
})
export class AppComponent {
  data = [{
    "id": 1,
    "uuid": "6e465588-bf3f-3422-883d-f04bc7da4698",
    "firstname": "Kip",
    "lastname": "Bernhard",
    "username": "shermiston",
    "password": "ZsV~a5mOrv3",
    "email": "ritchie.delores@wolf.com",
    "ip": "7.64.70.41",
    "macAddress": "42:15:CD:5C:12:9F",
    "website": "http:\/\/fadel.com",
    "image": "http:\/\/placeimg.com\/640\/480\/people"
  }, {
    "id": 2,
    "uuid": "50d17597-70d5-3b8e-8435-aab996cc571b",
    "firstname": "Dayana",
    "lastname": "Kovacek",
    "username": "klocko.garnet",
    "password": "a-V(YsCl",
    "email": "clementina64@hotmail.com",
    "ip": "50.217.62.48",
    "macAddress": "24:C6:93:61:A4:99",
    "website": "http:\/\/hartmann.com",
    "image": "http:\/\/placeimg.com\/640\/480\/people"
  }, {
    "id": 3,
    "uuid": "b6902685-2cf3-37d6-95f0-b1a0c5ac3231",
    "firstname": "Kelly",
    "lastname": "Wolff",
    "username": "iturcotte",
    "password": "Bek!*\"_cm0fp-}Av96&o",
    "email": "yhirthe@block.com",
    "ip": "248.31.95.167",
    "macAddress": "13:F5:52:16:70:EB",
    "website": "http:\/\/ferry.com",
    "image": "http:\/\/placeimg.com\/640\/480\/people"
  }, {
    "id": 4,
    "uuid": "1030ce8b-e688-325f-8124-fb8ed3f35fe6",
    "firstname": "Fannie",
    "lastname": "Olson",
    "username": "magnus55",
    "password": "9O6r6F",
    "email": "feest.rebeca@weissnat.com",
    "ip": "161.207.52.107",
    "macAddress": "6A:87:67:F8:CB:10",
    "website": "http:\/\/zemlak.com",
    "image": "http:\/\/placeimg.com\/640\/480\/people"
  }, {
    "id": 5,
    "uuid": "59cc5163-21b7-3972-bc2e-c2bd5aa3b862",
    "firstname": "Haylee",
    "lastname": "Howe",
    "username": "sandy.kreiger",
    "password": "$=t{=f.~H",
    "email": "oberbrunner.morgan@hotmail.com",
    "ip": "59.12.213.18",
    "macAddress": "6F:A1:A0:8F:88:9A",
    "website": "http:\/\/botsford.com",
    "image": "http:\/\/placeimg.com\/640\/480\/people"
  }, {
    "id": 6,
    "uuid": "c922156b-9d90-3e3c-861d-ed3e0ae13fd3",
    "firstname": "Rachael",
    "lastname": "Nikolaus",
    "username": "maegan.medhurst",
    "password": "vQB4p}`l[A7&\"8?c",
    "email": "bglover@yahoo.com",
    "ip": "48.174.54.1",
    "macAddress": "69:DD:E1:D3:61:E8",
    "website": "http:\/\/boyle.net",
    "image": "http:\/\/placeimg.com\/640\/480\/people"
  }, {
    "id": 7,
    "uuid": "3ac4fa78-af0f-36c1-a5da-461ff6d69acf",
    "firstname": "Angelina",
    "lastname": "Jakubowski",
    "username": "von.lupe",
    "password": "4jwzDIDxc5KZ$`,R",
    "email": "langosh.kendra@shields.com",
    "ip": "176.42.28.203",
    "macAddress": "C7:50:EC:45:6F:C7",
    "website": "http:\/\/lynch.net",
    "image": "http:\/\/placeimg.com\/640\/480\/people"
  }, {
    "id": 8,
    "uuid": "f0fca4d2-206e-3c4d-8d77-6e10b15b53f8",
    "firstname": "Noah",
    "lastname": "Turcotte",
    "username": "hackett.bernita",
    "password": "bl4A`i|zq-myB",
    "email": "akuhic@yahoo.com",
    "ip": "217.90.101.3",
    "macAddress": "7F:17:BE:80:B2:B2",
    "website": "http:\/\/feil.com",
    "image": "http:\/\/placeimg.com\/640\/480\/people"
  }, {
    "id": 9,
    "uuid": "9d2c5b8d-3c0f-3616-8fb3-ade9c8370c90",
    "firstname": "Trevor",
    "lastname": "Dickinson",
    "username": "gernser",
    "password": "2IIbV}fTX",
    "email": "kessler.wava@hotmail.com",
    "ip": "118.96.255.104",
    "macAddress": "01:1A:1E:CB:E4:6A",
    "website": "http:\/\/jast.com",
    "image": "http:\/\/placeimg.com\/640\/480\/people"
  }, {
    "id": 10,
    "uuid": "a44f385a-e84f-3b53-a131-538040fe0c4a",
    "firstname": "Kayli",
    "lastname": "Torp",
    "username": "katelyn05",
    "password": "deK;='CRk)~A6EBW-,t\\",
    "email": "steuber.kirk@crist.com",
    "ip": "152.19.212.108",
    "macAddress": "40:D3:9A:71:62:49",
    "website": "http:\/\/stroman.com",
    "image": "http:\/\/placeimg.com\/640\/480\/people"
  }]
  headers = Object.keys(this.data[0])
}


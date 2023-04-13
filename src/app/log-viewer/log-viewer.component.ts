// import { Component, OnInit } from '@angular/core';
// import * as AWS from 'aws-sdk/global';
// import * as S3 from 'aws-sdk/clients/s3';

// @Component({
//   selector: 'app-log-viewer',
//   templateUrl: './log-viewer.component.html',
//   styleUrls: ['./log-viewer.component.css']
// })
// export class LogViewerComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
// }


// uploadFile(file) 
// {
//   const contentType = file.type;
//   const bucket = new S3(
//         {
//             accessKeyId: 'YOUR-ACCESS-KEY-ID',
//             secretAccessKey: 'YOUR-SECRET-ACCESS-KEY',
//             region: 'YOUR-REGION'
//         }
//     );
//     const params = {
//         Bucket: 'sessionstorage',
//         Key: this.FOLDER + file.name,
//         Body: file,
//         ACL: 'public-read',
//         ContentType: contentType
//     };
//     bucket.upload(params, function (err, data) {
//         if (err) {
//             console.log('There was an error uploading your file: ', err);
//             return false;
//         }
//         console.log('Successfully uploaded file.', data);
//         return true;
//     });
// }

// }

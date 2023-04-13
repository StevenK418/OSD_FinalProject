import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import * as AWS from 'aws-sdk';


@Injectable({
  providedIn: 'root'
})
export class LogFileService {

  
  constructor() 
  { 
    const S3 = new AWS.S3({
      accessKeyId: 'AKIAW3CAD27X4ST4FXO6',
      secretAccessKey: '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',
      region: 'Global'
    });

  }

  // export const main = async () => {
  //   const command = new GetObjectCommand({
  //     Bucket: "test-bucket",
  //     Key: "hello-s3.txt"
  //   });
  
  //   try {
  //     const response = await client.send(command);
  //     // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
  //     const str = await response.Body.transformToString();
  //     console.log(str);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  // // snippet-end:[s3.JavaScript.buckets.getobjectV3]
  
  // // Invoke main function if this file was run directly.
  // if (process.argv[1] === fileURLToPath(import.meta.url)) {
  //   main();
  // }
 
  
  // downloadFile()
  // {

  //   const params = {
  //     Bucket: 'your_bucket_name',
  //     Key: 'your_file_name.txt'
  //   };

  //   S3.getItem(params, function(err, data) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(`File downloaded successfully. Content-Type: ${data.ContentType}`);
        
  //       // Download the file using HttpClient
  //       const blob = new Blob([data.Body], { type: data.ContentType });
  //       const url = window.URL.createObjectURL(blob);
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = 'your_file_name.txt';
  //       link.click();
  //     }
  //   });
  // }
  

}

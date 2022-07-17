import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo.service';
import { Photo } from '../Photo';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  loadedImage: Photo
  constructor(private service:PhotoService,
    private activated_route: ActivatedRoute) { }


  ngOnInit() {
    this.activated_route.paramMap.subscribe(
      paramMap => {
          if (!paramMap.has('photo_id'))
          {
            return;
          }
          const id = paramMap.get('photo_id');
          this.loadedImage = this.service.getPhotoById(id);
      })
  }
  ionViewWillEnter(){
    console.log("D-View will enter")
  }
  ionViewDidEnter(){
    console.log("D-View did enter")
  }
  ionViewDidLeave(){
    console.log("D-View did leave")
  }
  ionViewWillLeave(){
    console.log("D-View will leave")
  }

}

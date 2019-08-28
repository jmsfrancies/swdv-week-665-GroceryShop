import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  title = "Inventory";
  items = [
    {
      name: "Pears",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 8
    },
    {
      name: "Apples",
      quantity: 5
    }
  ];
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) { }
  removeItem(item) {
    console.log("Removing Item -", item);
    const toast = this.toastCtrl.create({
      message =  'Removing Item -' + item.name + item.quantity + "...",
      duration = 3000
    });
    toast.present();
  }
  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt(item);
  };
  showAddItemPrompt(item) {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please Enter Item ....",
      inputs: [{
        name: 'name',
        placeholder: 'name'
      },
      {
        name: 'quantity',
        placeholder: 'quantity'
      },
      ],
      buttons:
        [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            },
            {
            text: 'Save',
            handler: data => {
              console.log('Saved Clicked', item),
                this.items.push(item);
            },
         ],
    });
  }
}



import { Component, OnInit } from '@angular/core';
import { TableMother } from 'src/app/Models/tableMother';
import { DeleteRowService } from 'src/app/Services/delete-row.service';
import { FIllDataService } from 'src/app/Services/fill-data.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})


export class DefaultComponent implements OnInit {

  deleteModalView = true;
  updateModalView = true;
  currentZeut: number | undefined;
  currentid: number | undefined;
  lastZeut: number | undefined;
  tableMother: TableMother[] = [];

  constructor(private filldd: FIllDataService, private deleterow: DeleteRowService) {

  }

  yourDate = new Date()

  ngOnInit(): void {

    this.filldd.init();
    this.filldd.mResult.subscribe(val => {
    this.tableMother = val;
    });
  }

  AtemptToUpdate(item: TableMother) {
    this.updateModalView = false;
    this.deleteModalView = !this.updateModalView;
    this.lastZeut =  this.currentZeut = item.cliidzeut;
    document.getElementById("myModalUpdate")?.click()
    }

    UpdateZeut() {

      for (const iterator of this.tableMother.filter(x => x.cliidzeut == this.lastZeut)) {
        iterator.cliidzeut = this.currentZeut;
      }
    }

    AtemptToDelete(item: TableMother)
    {
      this.updateModalView = !false;
      this.deleteModalView = !this.updateModalView;
      this.currentid = item.id;
      document.getElementById("myModalDelete")?.click()
    }

    Refresh()
    {
      this.filldd.refresh().subscribe(val => {
        this.ngOnInit();
      });
    }

    DeleteRow()
    {
        var tempo = this.tableMother.find(x => x.id == this.currentid);
        this.deleterow.delete(tempo?.productid,tempo?.productType).subscribe(val => {
          this.tableMother = this.tableMother.filter(x=> x.id !== this.currentid);
        });
    }

}

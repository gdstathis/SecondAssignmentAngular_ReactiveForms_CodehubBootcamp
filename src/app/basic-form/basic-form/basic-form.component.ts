import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-basic-form",
  templateUrl: "./basic-form.component.html",
  styleUrls: ["./basic-form.component.scss"],
})
export class BasicFormComponent implements OnInit {
  form: FormGroup;
  programmingLanguages = ["TS", "JS", "C#"];

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl(null, [
        Validators.required,Validators.minLength(3)]),
      isExperienced: new FormControl(null, Validators.required),
      angular: new FormControl(null, Validators.required),
      favouriteLanguage: new FormControl(null),
      jsversion: new FormControl(null, Validators.required),
    });

    this.form.get("favouriteLanguage").valueChanges.subscribe((value) => {
      const jsVersionControl = this.form.get("jsversion");
      if (value === "JS") {
        jsVersionControl.setValidators(Validators.required);
      } else {
        jsVersionControl.clearValidators();
      }
      jsVersionControl.updateValueAndValidity();
    });
  }
}

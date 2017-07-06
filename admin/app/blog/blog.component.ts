import { Component, OnInit } from '@angular/core';

@Component({
    'templateUrl': './blog.component.html',
    'styleUrls': ['./blog.component.css'] 
})
export class BlogComponent implements OnInit {

    constructor() {}
    
    ngOnInit() {
        console.log('blog');
    }
}
import { Component, OnInit } from '@angular/core';

@Component({
    'template': '<p>Blog is working</p>'
})
export class BlogComponent implements OnInit {

    constructor() {}
    
    ngOnInit() {
        console.log('blog');
    }
}
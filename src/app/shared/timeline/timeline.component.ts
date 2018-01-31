import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public data: Array <any>;

  constructor() {
    this.data = [
      { timelineDate: 'Apr 2014' },
      { circle: true,
        timelinePanel: {
          title: 'Surprising Headline Right Here',
          date: '3 hours ago',
          body: ['<p>Lorem Ipsum and such.</p>']
        }
      },
      { circle: true,
        timelinePanel: {
          title: 'Breaking into Spring!',
          date: '4/07/2014',
          body: ['<p>Hope the weather gets a bit nicer...', 'Y\'know, with more sunlight.</p>']
        },
        inverted: true
      },
      { timelineDate: 'Mar 2014'},
      { circle: true,
        timelinePanel: {
          title: 'New Apple Device Release',
          date: '3/22/2014',
          body: ['<p>In memory of Steve Jobs.</p>']
        }
      },
      { inverted: true,
        timelinePanel: {
          title: 'No icon here',
          date: '3/16/2014',
          body: [
            '<p>Here you\'ll find some beautiful photography for your viewing pleasure, courtesy of <a href="http://lorempixel.com/">lorempixel</a>.</p>'
          ]
        }
      },

    ];
  }

  ngOnInit() {
  }

}

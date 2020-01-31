import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: 'music.page.html',
  styleUrls: ['music.page.scss']
})
export class MusicPage implements OnInit {
  public hotTracks: Array<{ title: string; artist: string; img: string }> = [
    {
      title: 'Hey Jude',
      artist: 'The Beatles',
      img: 'assets/music/hey-jude.jpg'
    },
    {
      title: 'Hound Dog',
      artist: 'Elvis Presley',
      img: 'assets/music/hound-dog.jpg'
    },
    {
      title: 'Good Vibrations',
      artist: 'The Beach Boys',
      img: 'assets/music/good-vibrations.jpg'
    },
    {
      title: 'I Walk The Line',
      artist: 'Johnny Cash',
      img: 'assets/music/i-walk-the-line.jpg'
    },
  ];

  public newTracks: Array<{ title: string; artist: string; img: string }> = [
    {
      title: 'Bohemian Rhapsody',
      artist: 'Queen',
      img: 'assets/music/bohemian-rhapsody.jpg'
    },
    {
      title: 'Don\'t Stop Believin\'',
      artist: 'Journey',
      img: 'assets/music/dont-stop-believin.jpg'
    },
    {
      title: 'Hit Me with Your Best Shot',
      artist: 'Pat Benetar',
      img: 'assets/music/hit-me-with-your-best-shot.jpg'
    },
    {
      title: 'Sweet Home Alabama',
      artist: 'Lynyrd Skynyrd',
      img: 'assets/music/sweet-home-alabama.jpg'
    },
  ];

  constructor() {

  }

  ngOnInit() {

  }

}

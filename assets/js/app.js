// Author: Alfredo Rodriguez
// Created Date: 9/25/2017

//Waits for the document to be
// ready to do all the commands in JQUERY
$(document).ready(() => {

    //Hides All Other Buttons, including the header
    //And goes to the next page with a smooth transition
    $("#selectSong").on("click", () => {


        //Shows all the main menu buttons
        $("#firstPage").hide("slow", () => {

            console.log("Main Menu Has been hidden")

        });


        //Shows all song buttons
        $("#secondPage").show("slow", () => {

            console.log("Song buttons have been shown")

        });

    });


    //Whenever any of the song buttons get clicked
    //Gets the attribute id of that specific button clicked
    //And modals gets opened to select more info about song
    $(".songs").on("click", function () {

        $('#myModal').modal('show');

        //Gets the id of that specific .songs button clicked
        songSelected = $(this).attr("id");

        console.log(songSelected);


    });

    //When the play button is clicked in the
    //modal it resumes the songs or plays the current
    //that has been selected
    $("#play").on("click", () => {

        try {

            //That attribute is the put in a switch case statement
            switch (songSelected) {

                //Pauses Current song playing
                //And plays song selected
                case "song1":

                    playSong(songs[0]);

                    break;


                case "song2":

                    playSong(songs[1]);

                    break;

                case "song3":

                    playSong(songs[2]);

                    break;

                case "song4":

                    playSong(songs[3]);

                    break;

                case "song5":

                    playSong(songs[4]);

                    break;

                //If none of the songs work we get an error message and console log
                default:

                    console.log("None of The Songs Work!");

                    break;

            }
        } catch (error) {
            console.log(error.message);

        }


    });

    $("#pause").on("click", () => {

        try {

            //That attribute is the put in a switch case statement
            switch (songSelected) {

                //Pauses Current song playing
                //And plays song selected
                case "song1":

                    pauseSong(songs[0]);

                    break;


                case "song2":

                    pauseSong(songs[1]);

                    break;

                case "song3":

                    pauseSong(songs[2]);

                    break;

                case "song4":

                    pauseSong(songs[3]);

                    break;

                case "song5":

                    pauseSong(songs[4]);

                    break;

                default:

                    console.log("None of The Songs Work!");

                    break;

            }

        }
        catch (error) {
            console.log(error.message);

        }


    });

    $("#restart").on("click", () => {

        try {

            //That attribute is the put in a switch case statement
            switch (songSelected) {

                //Pauses Current song playing
                //And plays song selected
                case "song1":

                    restartSong(songs[0]);

                    break;


                case "song2":

                    restartSong(songs[1]);

                    break;

                case "song3":

                    restartSong(songs[2]);

                    break;

                case "song4":

                    restartSong(songs[3]);

                    break;

                case "song5":

                    restartSong(songs[4]);

                    break;

                default:

                    console.log("None of The Songs Work!");

                    break;

            }

        } catch (error) {
            console.log(error.message);

        }


    });

    //Goes back to the main menu
    $("#backButton").on("click", () => {

        //Shows all main menu buttons
        $("#firstPage").show("slow", () => {

            console.log("Main menu Has been shown")

        });


        //Hides all song buttons
        $("#secondPage").hide("slow", () => {

            console.log("Song Selection has been hidden")

        });


    });


});

//Hides All Other Buttons for now
$("#secondPage").hide();

//Loads the songs/clips of every trivia
const clips = [$("#tronDisc")[0]];


//Grabs all the songs from the HTML
// that have been imported from cloudinary
const songs = [$("#weekndSong")[0], $("#instantCrush")[0],
    $("#getLucky")[0], $("#harderSong")[0], $("#dance")[0], $("#tronSong")[0]];

//Song status Variables
let songPlaying;
let tempSong;
let songSelected;

//Plays random song
//And waits until it finishes and play a new random song
function randomSong(library) {

    songPlaying = library[Math.floor(Math.random() * 6)];

    tempSong = songPlaying;

    songPlaying.play();

    //Waits until song is over and plays another songs
    songPlaying.addEventListener("ended", () => randomSong(songs));
}

//Plays random songs with an interval of 1 second
randomSong(songs);

//Hover over tron disc sound
$("#selectSong").mouseenter(() => {

    clips[0].currentTime = 0;
    clips[0].volume = 0.5;
    clips[0].play();

    //Stops playing sound if hovers out
    $(".btn-design1").mouseout(() => {

        clips[0].pause();

    });

});

//Plays new song and pauses old one
//User can go back to other one played and resume it
function playSong(library) {

    songPlaying.pause();

    songPlaying = library;

    songPlaying.play();

}


//Pauses the current song playing
function pauseSong() {

    songPlaying.pause();

    console.log("Song Paused!")

}

//Restarts the song being played
function restartSong() {

    songPlaying.currentTime = 0;
    songPlaying.play();

}








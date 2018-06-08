var app = b4w.require("app");
var data = b4w.require("data");
var cont = b4w.require("container");
var cam = b4w.require("camera");
var trans = b4w.require("transform");
var scene = b4w.require("scenes");
var cam_anim = b4w.require("camera_anim");

var name_c = 'container_fdf';

app.init({
	canvas_container_id: name_c,
	physics_enabled: false,
	autoresize: true,	
	key_pause_enabled: false,	
    msaa_samples: 1,
	callback: load_logo
});

function load_logo(){
	data.load(document.URL+"logo-3d.json", loaded_logo, preloader_cb);
}

function preloader_cb(percentage) {
    
    var percantage_num = document.getElementById("num");
    percantage_num.innerHTML = percentage + "%";       
    if (percentage == 100) {
        $('.loading').fadeOut(500);        
        return;
    }
}

function loaded_logo(){
	app.enable_camera_controls(false, true, false, null, false, true);
}


package {
	
	import com.longtailvideo.jwplayer.events.*;
	import com.longtailvideo.jwplayer.plugins.*;
	import com.longtailvideo.jwplayer.player.*;
	import com.longtailvideo.jwplayer.view.components.*;
	import com.longtailvideo.jwplayer.controller.*;
	import com.longtailvideo.jwplayer.utils.*;
	import flash.display.*;
	import flash.events.*;
	import flash.ui.*;
	import flash.utils.*;
	import flash.external.ExternalInterface;
	
	public class HelloWorld extends Sprite implements IPlugin6 {
	
	//player variables
	private var api:IPlayer;
	private var player:IPlayer;
	private var pluginConfig:PluginConfig;
	
        private var playerWidth:int;
        private var playerHeight:int;
           
                
	//dock icon
	[Embed(source="music.png")]
	private const Icon:Class;
		
	/** Reference to embed icon **/
	private var skinIcon:DisplayObject;
		
	/** Reference to the dock button **/
	private var dockButton:DockButton;
		
	/** Reference to the clip on stage. **/
	private var controlIcon:DisplayObject;
		
	/** Let the player know what the name of your plugin is. **/
	public function get id():String { return "helloworld"; }
		
	/** Let the player know what version of the player you are targeting. **/
	public function get target():String {
		return "6.0";
	}
		
	/* Called by the player after the plugin has been created. */
	public function initPlugin(player:IPlayer, config:PluginConfig):void {
		api = player;
		player = player;
		this.player = player;
			
		skinIcon = player.skin.getSkinElement("HelloWorld ", "dockIcon");
		if (skinIcon == null) {
			skinIcon = new Icon();
		}
		dockButton = player.controls.dock.addButton(skinIcon, "Toggle Setlist", dockHandler, "docked") as DockButton;
		
		// ExternalInterface.call("setListToggle", "my_div_id");    
			
	}	
		
	
	public function slowmo():void {

        
        // get the width and height and pass to function
        playerWidth = player.config.width;
        playerHeight = player.config.height;
    
	
            
        // This should call an outside function using External Interface
	ExternalInterface.call("setListToggle", playerWidth, playerHeight);
        
	    
        }
		
	/** Dock icon is clicked **/
	private function dockHandler(evt:MouseEvent):void 
	{	
		slowmo();
	}
        
        
		
	/* When the player resizes itself, it sets the x/y coordinates of all components and plugins. */		
	public function resize(wid:Number, hei:Number):void {
	
          if (player.config.fullscreen) {
            player.controls.dock.removeButton("docked");
          } else {
            
            dockButton = player.controls.dock.addButton(skinIcon, "Toggle Setlist", dockHandler, "docked") as DockButton;
          }

	}
    }
}
# slidePlaceholder
plugin js/css for dynamic placeholder

slidePlaceholder is a short pluggin using css and vanilla js.
it's useful for keeping your placeholder text visible.
for use it create a div with "slidePlaceholder" class and put your input in.
for customise your sliding placeholder use "data-color" on your input (rgb/rgba/hex color working). Default color is black.
for choose the slide direction use "data-position" on your input (top/bottom/right/left/inside). Default direction is top.

Call slidePlaceholder() for instantiate customization ans sliding.

Exemple :


	<div class="slidePlaceholder">
		<input type="text" placeholder="red slide left" data-color="red" data-position="left">
	</div>

	<div class="slidePlaceholder">
		<input type="textarea" placeholder="dark green - default slide" data-color="#31760b">
	</div>

	<div class="slidePlaceholder">
		<input type="password" placeholder="brown - slide bottom" data-color="71400c" data-position="bottom">
	</div>
	<script type="text/javascript">
		slidePlaceholder();
	</script>		
	
			
Exeption: for select input, you need to add "data-placeholder" on your select 

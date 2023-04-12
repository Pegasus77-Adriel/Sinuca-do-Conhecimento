CANVAS_W = 640;
CANVAS_H = 480;

// ### LOADING AUDIO RESOURCES
entities["correct"] = {active:true, audio:"../sounds/correct.wav"};

// ### INITIAL_MENU SCENE ###
entities["textTitle"] = {active:true, hidden:false,
	position:{x:CANVAS_W/2, y:150}, w:0, h:0, layer:1, text:"Sinuca do Conhecimento", fontName:"Arial", style:"bold", color:"white", size:48,
	maxWidth:200, lineHeight:48, align:"center"};

entities["startBtn"] = {active:true, hidden:false,
	position:{x:CANVAS_W/2,y:350}, w:100, h:40, margin:5,
	border:{width:1, color:"black", round:2},
	color:"tomato", hover:"red", text:"Iniciar", fontName:"arial", fontColor:"black", size:16, style:"bold"};

entities["optionBtn"] = {active:true, hidden:false,
	position:{x:CANVAS_W/2,y:400}, w:100, h:40, margin:5,
	border:{width:1, color:"black", round:2},
	color:"tomato", hover:"red", text:"Opções", fontName:"arial", fontColor:"black", size:16, style:"bold"};

entities["exitBtn"] = {active:true, hidden:false,
	position:{x:CANVAS_W/2,y:450}, w:100, h:40, margin:5,
	border:{width:1, color:"black", round:2},
	color:"tomato", hover:"red", text:"Sair", fontName:"arial", fontColor:"black", size:16, style:"bold"};

entities["backgroundImg"] = {active:true, hidden:false,
	position:{x:CANVAS_W/2,y:CANVAS_H/2}, w:1280, h:716, rotation:0, flip:"none",
	frames:[{index:"frame1",img:"../images/background.jpg"}],
	framesToShow:[{frame:"frame1",x:0,y:0,w:1280,h:716}],
	currentFrameToShow:0,
	};

asserts["startGame"] = {eval:"true", exec:"_loadScene('gameStarted');"};
asserts["optionAct"] = {eval:"true", exec:null};
asserts["exitAct"] = {eval:"true", exec:null};

scenes["initialMenu"] =
	{title:"Menu Inicial", active:true, h:CANVAS_H, w:CANVAS_W,
		events:[
			{name:"mouseClicked", entity:"startBtn", assertToPerform:"startGame"},
			{name:"mouseClicked", entity:"optionBtn", assertToPerform:"optionAct"},
			{name:"mouseClicked", entity:"exitBtn", assertToPerform:"exitAct"},
		],
		components:[
			{type:"sprite", entity:"backgroundImg"},
			{type:"button", entity:"startBtn"},
			{type:"label", entity:"textTitle"},
			{type:"button", entity:"optionBtn"},
			{type:"button", entity:"exitBtn"},
		]
	};

// ### GAME STARTED ###
entities["table"] = {active:true, hidden:false,
	position:{x:CANVAS_W/2,y:CANVAS_H/2}, w:1280, h:716, rotation:0, flip:"none",
	frames:[{index:"frame1",img:"../images/table.png"}],
	framesToShow:[{frame:"frame1",x:0,y:0,w:400,h:200}],
	currentFrameToShow:0,
	};

scenes["gameStarted"] =
	{title:"Jogo iniciado", active:false, h:CANVAS_H, w:CANVAS_W,
		events:[
			{name:"mouseClicked", entity:"testeBtn", assertToPerform:"testeAct"},
		],
		components:[
			{type:"sprite", entity:"table"},
		]
	};
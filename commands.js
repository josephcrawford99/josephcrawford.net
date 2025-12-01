const ASCII_ART = `   oooo                                        .oooooo.                                        .o88o.                          .o8
   \`888                                       d8P'  \`Y8b                                       888 \`"                         "888
    888  .ooooo.   .ooooo.  oooo    ooo      888          oooo d8b  .oooo.   oooo oooo    ooo o888oo   .ooooo.  oooo d8b  .oooo888
    888 d88' \`88b d88' \`88b  \`88.  .8'       888          \`888""8P \`P  )88b   \`88. \`88.  .8'   888    d88' \`88b \`888""8P d88' \`888
    888 888   888 888ooo888   \`88..8'        888           888      .oP"888    \`88..]88..8'    888    888   888  888     888   888
    888 888   888 888    .o    \`888'         \`88b    ooo   888     d8(  888     \`888'\`888'     888    888   888  888     888   888
.o. 88P \`Y8bod8P' \`Y8bod8P'     .8'           \`Y8bood8P'  d888b    \`Y888""8o     \`8'  \`8'     o888o   \`Y8bod8P' d888b    \`Y8bod88P"
\`Y888P                      .o..P'
                            \`Y8P'`;

const ASCII_ART_SMALL = `     _                  ___                  __            _
  _ | |___  ___ _  _   / __|_ _ __ ___ __ __/ _|___ _ _ __| |
 | || / _ \\/ -_) || | | (__| '_/ _\` \\ V  V /  _/ _ \\ '_/ _\` |
  \\__/\\___/\\___|\\_, |  \\___|_| \\__,_|\\_/\\_/|_| \\___/_| \\__,_|
                |__/                                         `;

export const commands = {
	help: {
		desc: "Show available commands",
		run: () => {
			const list = Object.entries(commands)
				.map(([name, cmd]) => cmd.desc ? `${name} - ${cmd.desc}` : name)
				.join("\n");
			return `Available commands:\n${list}`;
		}
	},
	picture: {
		desc: "What I look like",
		run: () => {
			return { html: `<img src="/JoeyPic.JPG" alt="Joey">` }
		}
	},
	contact: {
		desc: "To hire me",
		run: () => {
			return [
				{ html: `Email me at <a href="mailto:josephcrawford99@gmail.com">josephcrawford99@gmail.com</a>` },
				{ html: `LinkedIn: <a href="https://www.linkedin.com/in/josephcrawford99/">https://www.linkedin.com/in/josephcrawford99/</a>` },
				{ html: `GitHub: <a href="https://github.com/josephcrawford99">https://github.com/josephcrawford99</a>` }
			]
		}
	},
	welcome: {
		desc: "Welcome message",
		run: () => [
			{ text: ASCII_ART, class: 'ascii-large' },
			{ text: ASCII_ART_SMALL, class: 'ascii-small' },
			{ html: `Welcome to my website!<br><img src="/JoeyPic.JPG" alt="Joey"><br>Type 'help' and press Enter to see what commands are available.` }
		]
	},
	ascii: {
		desc: "Show ASCII art",
		run: () => [
			{ text: ASCII_ART, class: 'ascii-large' },
			{ text: ASCII_ART_SMALL, class: 'ascii-small' }
		]
	}
};

var colorNum = 0;

function remind_course_start_color(color, row, column) { //选择课表中特定的单元格,并变化其背景颜色
	$("table tr:eq(" + row + ") td:eq(" + column + ")").css("backgroundColor", color);
}

function bright_quench_a(color1, color2, row, column) { //执行背景色变量
	console.log("变色函数执行", colorNum);
	if (colorNum % 2 == 1) {
		remind_course_start_color(color1, row, column);
	} else {
		remind_course_start_color(color2, row, column);
	}
	colorNum++
}

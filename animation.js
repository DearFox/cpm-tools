/* Animation */
/* by DearFox */
function animation_rotation(entity,model,frame,total_time,bone,original_positionX,original_positionY,original_positionZ){
    var anim_moment= entity.getAge()%(total_time*20)
    for (var i=0; i<frame.length-2;i=i+2){
        if (anim_moment>=(frame[i]*20)&&anim_moment<=(frame[i+2]*20)){
            var res_1 = frame[i+1][0]+(anim_moment-(frame[i]*20))*(frame[i+3][0]-frame[i+1][0])/((frame[i+2]*20)-(frame[i]*20));
            var res_2 = frame[i+1][1]+(anim_moment-(frame[i]*20))*(frame[i+3][1]-frame[i+1][1])/((frame[i+2]*20)-(frame[i]*20));
            var res_3 = frame[i+1][2]+(anim_moment-(frame[i]*20))*(frame[i+3][2]-frame[i+1][2])/((frame[i+2]*20)-(frame[i]*20));
            model.getBone(bone).setRotation(res_1+original_positionX,res_2+original_positionY,res_3+original_positionZ);
        }
    }
}
function animation_position(entity,model,frame,total_time,bone,original_positionX,original_positionY,original_positionZ){
    var anim_moment= entity.getAge()%(total_time*20)
    for (var i=0; i<frame.length-2;i=i+2){
        if (anim_moment>=(frame[i]*20)&&anim_moment<=(frame[i+2]*20)){
            var res_1 = frame[i+1][0]+(anim_moment-(frame[i]*20))*(frame[i+3][0]-frame[i+1][0])/((frame[i+2]*20)-(frame[i]*20));
            var res_2 = frame[i+1][1]+(anim_moment-(frame[i]*20))*(frame[i+3][1]-frame[i+1][1])/((frame[i+2]*20)-(frame[i]*20));
            var res_3 = frame[i+1][2]+(anim_moment-(frame[i]*20))*(frame[i+3][2]-frame[i+1][2])/((frame[i+2]*20)-(frame[i]*20));
            model.getBone(bone).setPosition(res_1+original_positionX,res_2+original_positionY,res_3+original_positionZ);
        }
    }
}
function init(entity, model){
}
function update(entity, model){
    // Сюда вставлять сгенерированный код анимации с https://dearfox.github.io/cpm-tools/animation_parser.html
}
function tick(entity, model){
}
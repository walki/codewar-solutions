

def direction(facing, turn):
    
    deg_to_comp = { 0:'N', 45:'NE', 90:'E', 135:'SE', 180:'S', 225:'SW', 270:'W', 315:'NW' }
    comp_to_deg = { 'N':0, 'NE':45, 'E':90, 'SE':135, 'S':180, 'SW':225, 'W':270, 'NW':315 }


    start_deg = comp_to_deg[facing]
    end_deg = start_deg + turn

    dir = deg_to_comp[end_deg % 360]

    return dir
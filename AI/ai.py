def rank_notices(student_profile, notices):
    filtered = [
        n for n in notices
        if n['branch'] == student_profile['branch']
        and n['year'] == student_profile['year']
    ]

    ranked = sorted(
        filtered,
        key=lambda x: x['engagement'],
        reverse=True
    )

    return ranked
 

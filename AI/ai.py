# Simple AI recommender for notices

def rank_notices(student_profile, notices):

    """

    student_profile: dict with keys 'branch', 'year'

    notices: list of dicts with keys 'branch', 'year', 'engagement'

    """

    # Filter notices relevant to branch/year

    filtered = [n for n in notices if n['branch'] == student_profile['branch'] and n['year'] == student_profile['year']]

    # Sort by engagement score (higher first)

    ranked = sorted(filtered, key=lambda x: x['engagement'], reverse=True)

    return ranked
 
